import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ShieldCheck } from 'lucide-react-native';

// Concentric ovals that simulate a radial gradient glow in the center
// Colors shift from dark navy (outer) to dark teal-green (inner)
const RADIAL_LAYERS = [
	{ size: 600, color: '#091810', opacity: 0.18 },
	{ size: 460, color: '#0A1E14', opacity: 0.28 },
	{ size: 340, color: '#0B2418', opacity: 0.38 },
	{ size: 240, color: '#0C2A1C', opacity: 0.45 },
	{ size: 155, color: '#0E3020', opacity: 0.5 },
	{ size: 90,  color: '#103824', opacity: 0.55 },
];
function RadialGlow() {
	return (
		<>
			{RADIAL_LAYERS.map(({ size, color, opacity }, i) => (
				<View
					key={i}
					style={{
						position: 'absolute',
						width: size,
						height: size * 1.1,
						borderRadius: size,
						backgroundColor: color,
						opacity,
					}}
				/>
			))}
		</>
	);
}

// Generates dots positioned in a globe/sphere pattern
function generateGlobeDots() {
	const dots: { x: number; y: number; size: number; opacity: number }[] = [];

	// Latitude rows — widths follow a spherical silhouette
	const rows = [
		{ count: 2, y: -44, spread: 16 },
		{ count: 4, y: -30, spread: 34 },
		{ count: 6, y: -16, spread: 46 },
		{ count: 7, y: -2, spread: 52 },
		{ count: 6, y: 12, spread: 46 },
		{ count: 4, y: 26, spread: 34 },
		{ count: 2, y: 40, spread: 16 },
	];

	rows.forEach(({ count, y, spread }) => {
		for (let i = 0; i < count; i++) {
			const t = count === 1 ? 0 : (i / (count - 1) - 0.5) * 2;
			dots.push({
				x: t * spread,
				y,
				size: 4,
				opacity: 0.55 + Math.abs(t) * 0.1,
			});
		}
	});

	// A few extra center-column dots for the "meridian" feel
	[-38, -22, -6, 8, 22, 36].forEach((y) => {
		dots.push({ x: 0, y, size: 3.5, opacity: 0.4 });
	});

	return dots;
}

const GLOBE_DOTS = generateGlobeDots();
const BAR_CYCLE = 2200; // ms por cada ciclo de la barra

export default function SplashScreen() {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const loadingAnim = useRef(new Animated.Value(0)).current;
	const glowAnim = useRef(new Animated.Value(0.75)).current;

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1200,
			useNativeDriver: true,
		}).start();

		// Loop: llena en BAR_CYCLE ms, se resetea y repite hasta que el splash desaparece
		Animated.loop(
			Animated.timing(loadingAnim, {
				toValue: 1,
				duration: BAR_CYCLE,
				useNativeDriver: false,
			}),
		).start();

		Animated.loop(
			Animated.sequence([
				Animated.timing(glowAnim, {
					toValue: 1,
					duration: 1800,
					useNativeDriver: true,
				}),
				Animated.timing(glowAnim, {
					toValue: 0.55,
					duration: 1800,
					useNativeDriver: true,
				}),
			]),
		).start();
	}, []);

	const loadingWidth = loadingAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0%', '100%'],
	});

	return (
		<View style={styles.container}>
			<RadialGlow />

			{/* Center content */}
			<Animated.View style={[styles.center, { opacity: fadeAnim }]}>
				{/* Globe icon */}
				<View style={styles.globeWrapper}>
					{GLOBE_DOTS.map((dot, i) => (
						<View
							key={i}
							style={[
								styles.dot,
								{
									width: dot.size,
									height: dot.size,
									borderRadius: dot.size / 2,
									opacity: dot.opacity,
									transform: [{ translateX: dot.x }, { translateY: dot.y }],
								},
							]}
						/>
					))}
				</View>

				{/* EF logotype */}
				<Animated.Text style={[styles.logo, { opacity: glowAnim }]}>
					EF
				</Animated.Text>

				{/* Loading indicator */}
				<View style={styles.barTrack}>
					<Animated.View style={[styles.barFill, { width: loadingWidth }]} />
				</View>
			</Animated.View>

			{/* Bottom taglines */}
			<Animated.View style={[styles.bottom, { opacity: fadeAnim }]}>
				<Animated.Text style={styles.tagline}>
					THE FUTURE OF PRIVATE BANKING
				</Animated.Text>
				<View style={styles.encryptRow}>
					<ShieldCheck size={11} color="#2D3E5A" strokeWidth={1.5} />
					<Animated.Text style={styles.encryptText}>
						END-TO-END ENCRYPTION
					</Animated.Text>
				</View>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#090F1E',
		alignItems: 'center',
		justifyContent: 'center',
	},
	center: {
		alignItems: 'center',
	},
	globeWrapper: {
		width: 120,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 28,
	},
	dot: {
		position: 'absolute',
		backgroundColor: '#00D48A',
	},
	logo: {
		fontSize: 76,
		fontWeight: '700',
		color: '#00D48A',
		letterSpacing: 10,
		textShadowColor: '#00D48A',
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 24,
	},
	barTrack: {
		width: 110,
		height: 6,
		borderRadius: 3,
		backgroundColor: '#16233A',
		marginTop: 28,
		overflow: 'hidden',
	},
	barFill: {
		height: '100%',
		borderRadius: 3,
		backgroundColor: '#2D4060',
	},
	bottom: {
		position: 'absolute',
		bottom: 52,
		alignItems: 'center',
		gap: 10,
	},
	tagline: {
		color: '#3A4F6A',
		fontSize: 10,
		letterSpacing: 3.5,
		fontWeight: '500',
	},
	encryptRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	encryptText: {
		color: '#243347',
		fontSize: 9,
		letterSpacing: 2.5,
	},
});
