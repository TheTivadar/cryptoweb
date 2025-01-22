"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts"

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


interface ChartData {
  month: string;
  visitors: number;
}

const chartConfig = {
  visitors: {
    label: "Százalékos növekedés:",
  },
} satisfies ChartConfig

export function NegativeChart({chartData}:{chartData:ChartData[]}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Százalékos változás</CardTitle>
        <CardDescription>November - Január 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="visitors">
              <LabelList position="top" dataKey="month" fillOpacity={1} />
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill={
                    item.visitors > 0
                      ? "hsl(var(--chart-1))"
                      : "hsl(var(--chart-2))"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {chartData.map((item,index)=> (
          <div key={index} className="flex gap-2 font-medium leading-none">
            {item.month}: {item.visitors}% <TrendingUp className="h-4 w-4" />
        </div>
        ))}
        

      </CardFooter>
    </Card>
  )
}
