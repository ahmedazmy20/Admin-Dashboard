import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Team from "./Pages/Team/Team";
import Contacts from "./Pages/Contacts/Contacts";
import Invoices from "./Pages/Invoices/invoices";
import Form from "./Pages/Form/Form";
import Calendar from "./Pages/Calendar/Calendar";
import Faq from "./Pages/Faq/Faq";
import Bar from "./Pages/Bar/Bar";
import Pie from "./Pages/Pie/Pie";
import Line from "./Pages/Line/Line";
import Geography from "./Pages/Geography/Geography";
import NotFound from "./Pages/NotFound/NotFound";


const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element= {<Dashboard/>} />
      <Route path="team" element= {<Team/>} />
      <Route path="contacts" element= {<Contacts/>} />
      <Route path="invoices" element= {<Invoices/>} />
      <Route path="form" element= {<Form/>} />
      <Route path="calendar" element= {<Calendar/>} />
      <Route path="faq" element= {<Faq/>} />
      <Route path="bar" element= {<Bar/>} />
      <Route path="pie" element= {<Pie/>} />
      <Route path="line" element= {<Line/>} />
      <Route path="geography" element= {<Geography/>} />
      <Route path="*" element= {<NotFound/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
