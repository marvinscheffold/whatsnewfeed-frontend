import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home/home";
import { Feed } from "./feed/feed";
import { Help } from "./help/help";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
}
