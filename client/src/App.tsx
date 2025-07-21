import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { CartProvider, useCart } from "@/hooks/use-cart";
import { CartOverlay } from "@/components/cart-overlay";
import Home from "@/pages/home";
import Catalog from "@/pages/catalog";
import { ProductOverview } from "@/pages/ProductOverview";
import NotFound from "@/pages/not-found";

function Router() {
  const { items, isOpen, updateQuantity, removeItem, closeCart } = useCart();

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product/grass-fed-collagen-peptides" component={ProductOverview} />
        <Route component={NotFound} />
      </Switch>
      <CartOverlay 
        isOpen={isOpen}
        onClose={closeCart}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Router />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
