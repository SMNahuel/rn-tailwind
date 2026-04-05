import { memo, useMemo } from "react";
import { View } from "react-native";
import { CartesianChart, Line, Area } from "victory-native";
import { LinearGradient, vec } from "@shopify/react-native-skia";

import { colors } from "@/theme/colors";

const CHART_HEIGHT = 200;

type DataPoint = { index: number; price: number };

type AssetPriceChartProps = {
  points: number[];
};

const AssetPriceChart = memo(function AssetPriceChart({
  points,
}: AssetPriceChartProps) {
  const data = useMemo<DataPoint[]>(
    () => points.map((price, index) => ({ index, price })),
    [points],
  );

  return (
    <View className="mt-2 w-full px-6" style={{ height: CHART_HEIGHT }}>
      <CartesianChart
        data={data}
        xKey="index"
        yKeys={["price"]}
        domainPadding={{ top: 16, bottom: 8 }}
      >
        {({ points: chartPoints, chartBounds }) => (
          <>
            <Area
              points={chartPoints.price}
              y0={chartBounds.bottom}
              color="transparent"
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(0, CHART_HEIGHT)}
                colors={[`${colors.primary.DEFAULT}66`, `${colors.primary.DEFAULT}00`]}
              />
            </Area>
            <Line
              points={chartPoints.price}
              color={colors.primary.DEFAULT}
              strokeWidth={2.5}
              curveType="natural"
            />
          </>
        )}
      </CartesianChart>
    </View>
  );
});

export default AssetPriceChart;
