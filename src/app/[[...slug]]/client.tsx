"use client";

import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../../App"), { ssr: false });
// const Excalidraw = dynamic(
// 	async () => (await import("@excalidraw/excalidraw")).Excalidraw,
// 	{
// 		ssr: false,
// 	}
// );

export function ClientOnly() {
	return <App />;
	// return <Excalidraw />;
}
