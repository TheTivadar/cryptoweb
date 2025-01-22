"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-11-24", crypto: 4751 },
  { date: "2024-11-25", crypto: 4822 },
  { date: "2024-11-26", crypto: 4901 },
  { date: "2024-11-27", crypto: 4732 },
  { date: "2024-11-28", crypto: 4421 },
  { date: "2024-11-29", crypto: 5156 },
  { date: "2024-11-30", crypto: 4976 },
  { date: "2024-12-01", crypto: 4812 },
  { date: "2024-12-02", crypto: 4893 },
  { date: "2024-12-03", crypto: 4917 },
  { date: "2024-12-04", crypto: 4468 },
  { date: "2024-12-05", crypto: 4934 },
  { date: "2024-12-06", crypto: 5432 },
  { date: "2024-12-07", crypto: 5874 },
  { date: "2024-12-08", crypto: 5304 },
  { date: "2024-12-09", crypto: 5230 },
  { date: "2024-12-10", crypto: 5400 },
  { date: "2024-12-11", crypto: 5723 },
  { date: "2024-12-12", crypto: 5321 },
  { date: "2024-12-13", crypto: 5501 },
  { date: "2024-12-14", crypto: 5965 },
  { date: "2024-12-15", crypto: 6101 },
  { date: "2024-12-16", crypto: 5290 },
  { date: "2024-12-17", crypto: 5160 },
  { date: "2024-12-18", crypto: 5160 },
  { date: "2024-12-19", crypto: 5543 },
  { date: "2024-12-20", crypto: 5810 },
  { date: "2024-12-21", crypto: 5400 },
  { date: "2024-12-22", crypto: 4890 },
  { date: "2024-12-23", crypto: 4927 },
  { date: "2024-12-24", crypto: 4875 },
  { date: "2024-12-25", crypto: 4846 },
  { date: "2024-12-26", crypto: 4920 },
  { date: "2024-12-27", crypto: 4991 },
  { date: "2024-12-28", crypto: 4807 },
  { date: "2024-12-29", crypto: 4853 },
  { date: "2024-12-30", crypto: 5231 },
  { date: "2024-12-31", crypto: 5263 },
  { date: "2025-01-01", crypto: 5293 },
  { date: "2025-01-02", crypto: 5412 },
  { date: "2025-01-03", crypto: 5263 },
  { date: "2025-01-04", crypto: 4930 },
  { date: "2025-01-05", crypto: 5231 },
  { date: "2025-01-06", crypto: 5267 },
  { date: "2025-01-07", crypto: 5222 },
  { date: "2025-01-08", crypto: 5297 },
  { date: "2025-01-09", crypto: 5371 },
  { date: "2025-01-10", crypto: 5641 },
  { date: "2025-01-11", crypto: 5864 },
  { date: "2025-01-12", crypto: 6206 },
  { date: "2025-01-13", crypto: 6598 },
  { date: "2025-01-14", crypto: 5801 },
  { date: "2025-01-15", crypto: 5987 },
  { date: "2025-01-16", crypto: 6321 },
  { date: "2025-01-17", crypto: 5973 },
  { date: "2025-01-18", crypto: 5211 },
  { date: "2025-01-19", crypto: 5432 },
  { date: "2025-01-20", crypto: 5786 },
  { date: "2025-01-21", crypto: 5678 },
  { date: "2025-01-22", crypto: 5432 }
]

interface ChartData {
  date:Date,
  crypto:number
}

const chartConfig = {
  visitors: {
    label: "Egyenleg",
  },
  desktop: {
    label: "Crypto",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export function AreaChartDemo({chartData}:{chartData:ChartData[]}) {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value:any) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="crypto"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
