"use client";
import { useEffect, useRef } from "react";

const TradingViewChart = ({ symbol = "BTCUSDT" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 500,
      symbol: `BINANCE:${symbol}`,
      theme: "dark",
      style: "1",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: false, // Prevents changing the symbol
      hide_top_toolbar: true, // ✅ Hides toolbar (indicators, settings)
      hide_legend: false, // ✅ Hides legend
      hide_side_toolbar: true, // ✅ Hides the side toolbar (drawing tools)
      withdateranges: false, // ✅ Hides date range selector
      calendar: false, // ✅ Hides the calendar
      studies: [], 
      details: true, 
      disable_zoom: true, 
      disable_scroll: true, 
    });

    containerRef.current.appendChild(script);
  }, [symbol]);

  return <div ref={containerRef} className="tradingview-widget-container" />;
};

export default TradingViewChart;
