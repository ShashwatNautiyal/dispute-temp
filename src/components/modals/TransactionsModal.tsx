import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import Modal from "@/components/Modal";
import Search from "@/components/Search";

import Header from "@/components/Header";
import ProviderContainer from "@/components/ProviderContainer";
import TransactionCard from "@/components/TransactionCard";

const [showModal, setShowModal] = createSignal(false);

const TransactionsModal: Component = () => {
  return (
    <Modal open={showModal()} onClose={() => setShowModal(false)}>
      <div class="relative bg-white w-[750px] h-[600px] rounded-[16px] overflow-hidden">
        <button class="absolute top-2 right-2" onClick={() => setShowModal(false)}>Close</button>
        <div class="flex divide-x h-full">

          <div class="flex flex-col flex-shrink-0 divide-y h-full">
            <div class="p-2">
              <Search placeholder="Search Transactions" />
            </div>
            <div class="p-2 flex flex-col gap-0.5 overflow-y-hidden mr-[var(--scrollbar-width)] hover:overflow-y-scroll hover:mr-0">
              <ProviderContainer name="All" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
              <ProviderContainer name="Stripe" count={2} />
            </div>
          </div>

          <div class="flex flex-col w-full divide-y">
            <div class="p-3">
              <Header
                title="Stripe"
                description="Add and manage your Stripe accounts"
                actionName="Add new"
                onActionPress={() => void 0}
              />
            </div>
            <div class="p-2 overflow-hidden hover:overflow-y-scroll flex flex-col gap-2">
              <TransactionCard
                data={{
                  flowCount: 2,
                  lastEditTime: "2 days ago",
                  name: "**** 1234",
                  totalVideos: 2
                }}
                onCardClick={() => void 0}
              />
              <TransactionCard
                data={{
                  flowCount: 2,
                  lastEditTime: "2 days ago",
                  name: "**** 1234",
                  totalVideos: 2
                }}
                onCardClick={() => void 0}
              />
              <TransactionCard
                data={{
                  flowCount: 2,
                  lastEditTime: "2 days ago",
                  name: "**** 1234",
                  totalVideos: 2
                }}
                onCardClick={() => void 0}
              />
              <TransactionCard
                data={{
                  flowCount: 2,
                  lastEditTime: "2 days ago",
                  name: "**** 1234",
                  totalVideos: 2
                }}
                onCardClick={() => void 0}
              />
            </div>
          </div>
        </div>

        
      </div>
    </Modal>
  );
};


export default {
  Component: TransactionsModal,
  setVisiblity: setShowModal
};