"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]

interface ChartData {
  browser:string,
  visitors:number,
  fill:string
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Bitcoin",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Solana",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Altcoinok",
    color: "hsl(var(--chart-3))",
  }
} satisfies ChartConfig

export function PieChartDemo({chartData}:{chartData:ChartData[]}) {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Portfólió összetétele</CardTitle>
        <CardDescription>Százalékos eloszlás</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        {chartData.map((item, index) => (
  <p key={index} style={{ display: "flex", alignItems: "center" }}>
    <span 
      style={{
        width: "10px", 
        height: "10px", 
        borderRadius: "50%", 
        backgroundColor: item.fill, 
        marginRight: "8px"
      }} 
    />
    {item.browser}
  </p>
))}

      </CardContent>
    </Card>
  )
}
