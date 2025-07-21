// src/lib/onesignal.js
export function initializeOneSignal() {
  if (typeof window !== 'undefined') {
    // Load the OneSignal SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
    script.defer = true;
    document.head.appendChild(script);

    // Initialize OneSignal when the script loads
    script.onload = () => {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(function(OneSignal) {
        OneSignal.init({
          appId: "c5e2ae59-ad8b-46e8-8750-efc14cef5ad0", // Replace with your actual App ID
          notifyButton: {
            enable: true, // Shows the OneSignal bell icon
          },
          // Optional: Custom service worker path if not in root
          // serviceWorkerPath: '/OneSignalSDKWorker.js',
          // serviceWorkerParam: { scope: '/' }
        });
      });
    };
  }
}