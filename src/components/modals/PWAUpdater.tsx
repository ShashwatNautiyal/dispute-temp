import type { VoidComponent } from 'solid-js'
import { useRegisterSW } from 'virtual:pwa-register/solid'

import Modal from '@/components/Modal';

const PWAUpdater: VoidComponent = () => {
  const {
    // offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered (registration) {
      console.info("[service-worker]", registration);
      registration && setInterval(() => registration.update(),
        // TODO: for now it's checking for SW every 10s. 
        10 * 1000
      );
    },
    
    onRegisterError (error) {
      console.error('[service-worker]', error);
    }
  })

  const close = () => {
    if (needRefresh()) updateServiceWorker(false);
    setNeedRefresh(false);
  };

  const update = async () => {
    await updateServiceWorker(true);
    // Manual reload in case the one before didn't worked.
    window.location.reload();
  };

  return (
    <Modal open={needRefresh()} onClose={close}>
      <div class="bg-white p-4 flex flex-col gap-2">
        <div class="text-lg leading-5 font-medium">
          <span>Update available</span>
        </div>

        <div class="flex gap-3 justify-end">
          <button class="" onClick={close}>Close</button>
          <button class="" onClick={update}>Reload</button>
        </div>
      </div>
    </Modal>
  );
};

export default PWAUpdater;