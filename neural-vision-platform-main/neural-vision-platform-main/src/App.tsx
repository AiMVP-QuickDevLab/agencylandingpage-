
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcommercePlatform from "./pages/projects/EcommercePlatform";
import HealthcareApp from "./pages/projects/HealthcareApp";
import FinancialDashboard from "./pages/projects/FinancialDashboard";
import IoTPlatform from "./pages/projects/IoTPlatform";
import AICRMSystem from "./pages/projects/AICRMSystem";
import DesignSystem from "./pages/projects/DesignSystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/ecommerce-platform" element={<EcommercePlatform />} />
          <Route path="/projects/healthcare-app" element={<HealthcareApp />} />
          <Route path="/projects/financial-dashboard" element={<FinancialDashboard />} />
          <Route path="/projects/iot-platform" element={<IoTPlatform />} />
          <Route path="/projects/ai-crm-system" element={<AICRMSystem />} />
          <Route path="/projects/design-system" element={<DesignSystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
