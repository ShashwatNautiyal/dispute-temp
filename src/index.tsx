/* @refresh reload */
import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import type { Component } from "solid-js";
import { render } from 'solid-js/web';

import { lazy, createSignal } from "solid-js";
import { Router, Routes, Route, useLocation, A } from "@solidjs/router";

import Modal from "@/components/Modal";
import AppBar from "@/components/AppBar";
import AppIcon from "@/components/AppIcon";

const App: Component = () => {
  const location = useLocation();
  const [showModal, setShowModal] = createSignal(false);

  return (
    <>
    <div class="h-screen w-screen flex">
      <AppBar>
        <A href="/">
          <AppIcon active={location.pathname === "/"} letter="H" showNotifications={false} />
        </A>
        
        <button onClick={() => setShowModal(true)} class="group pl-2">
          <div class="relative h-[44px] w-[44px] bg-[#f5f5f5] text-white flex justify-center items-center rounded-full group-hover:rounded-xl">
            <div class="h-[20px] w-[20px] flex justify-center items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.5C8.16576 0.5 8.32473 0.565848 8.44194 0.683058C8.55915 0.800269 8.625 0.95924 8.625 1.125V7.375H14.875C15.0408 7.375 15.1997 7.44085 15.3169 7.55806C15.4342 7.67527 15.5 7.83424 15.5 8C15.5 8.16576 15.4342 8.32473 15.3169 8.44194C15.1997 8.55915 15.0408 8.625 14.875 8.625H8.625V14.875C8.625 15.0408 8.55915 15.1997 8.44194 15.3169C8.32473 15.4342 8.16576 15.5 8 15.5C7.83424 15.5 7.67527 15.4342 7.55806 15.3169C7.44085 15.1997 7.375 15.0408 7.375 14.875V8.625H1.125C0.95924 8.625 0.800269 8.55915 0.683058 8.44194C0.565848 8.32473 0.5 8.16576 0.5 8C0.5 7.83424 0.565848 7.67527 0.683058 7.55806C0.800269 7.44085 0.95924 7.375 1.125 7.375H7.375V1.125C7.375 0.95924 7.44085 0.800269 7.55806 0.683058C7.67527 0.565848 7.83424 0.5 8 0.5V0.5Z" fill="#1D1D1F"/>
              </svg>
            </div>
          </div>
        </button>

        <span class="border-t border-t-[#f2f2f2] w-[44px] ml-auto" />

        <A href="/provider">
          <AppIcon active={location.pathname.includes("/provider")} letter="P" showNotifications={false} />
        </A>

        <AppIcon active={false} letter="U" showNotifications={false} />
        <AppIcon active={false} letter="F" showNotifications={false} />
        <AppIcon active={false} letter="G" showNotifications={true} notifications="1" />
        <AppIcon active={false} letter="P" showNotifications={false} />
        <AppIcon active={false} letter="H" showNotifications={true} notifications="1.5k" />
        <AppIcon active={false} letter="W" showNotifications={false} />
        <AppIcon active={false} letter="R" showNotifications={false} />
        <AppIcon active={false} letter="T" showNotifications={false} />
        <AppIcon active={false} letter="Y" showNotifications={false} />
        <AppIcon active={false} letter="N" showNotifications={true} notifications="1.5k" />
        <AppIcon active={false} letter="G" showNotifications={true} notifications="2k" />
        <AppIcon active={false} letter="G" showNotifications={false} />
        <AppIcon active={false} letter="Y" showNotifications={false} />
        <AppIcon active={false} letter="U" showNotifications={false} />
        <AppIcon active={false} letter="P" showNotifications={true} notifications="99" />
        <AppIcon active={false} letter="H" showNotifications={false} />
        <AppIcon active={false} letter="P" showNotifications={false} />
      </AppBar>

      <Routes>
        <Route path="/" component={lazy(() => import("@/pages/index"))} />
        <Route path="/provider" component={lazy(() => import("@/pages/provider"))}>
          <Route path="/" />
          <Route path="/:id" component={lazy(() => import("@/pages/provider/[id]"))} />
        </Route>
      </Routes>
    </div>

    <Modal open={showModal()} onClose={() => setShowModal(false)}>
      <div class="bg-white w-[500px] h-[600px] rounded-[32px] p-2">

        <h1>Hello modal!</h1>
        <button onClick={() => setShowModal(false)}>Close modal</button>
      </div>
    </Modal>

    </>
  )
};

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById("app") as HTMLDivElement);