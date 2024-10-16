import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "redux/store";
import ThemeProviderWrapper from "theme/ThemeProviderWrapper";
const Auth = React.lazy(() => import("pages/auth/Auth"));
const About = React.lazy(() => import("pages/About"));
const Dashboard = React.lazy(() => import("pages/protected/Dashboard"));
const Loader = React.lazy(() => import("components/loader/Loader"));
const NotFound = React.lazy(() => import("pages/NotFound"));
const AuthLayout = React.lazy(() => import("layouts/AuthLayout"));
const ProtectedLayout = React.lazy(() => import("layouts/ProtectedLayout"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProviderWrapper>
          <React.Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Routes>
                <Route element={<AuthLayout />}>
                  {/* Auth route start from here. */}
                  <Route path="/auth" element={<Auth />} />
                  {/* Auth route end here. */}
                </Route>
                <Route element={<ProtectedLayout />}>
                  {/* Protected route start from here. */}
                  <Route path="/" element={<Dashboard />} />
                  {/* Protected route end here. */}
                </Route>
                {/* Other route start here. */}
                <Route path="/about" element={<About />} />
                {/* Other route end here. */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </React.Suspense>
        </ThemeProviderWrapper>
      </Provider>
    </div>
  );
}

export default App;
