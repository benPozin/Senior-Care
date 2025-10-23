"use client";
import "./globals.css";
import React from "react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-slate-50 text-slate-800 antialiased">
{children}
</body>
</html>
);
}