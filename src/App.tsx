import Home from "@/pages/home/Home";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/sign-in/SignIn";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/sign-up" element={<SignupForm />} /> */}
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
