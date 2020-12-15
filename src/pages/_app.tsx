import 'src/styles/core.css';
import 'src/styles/custom.css';
import { App as AppComponent } from 'src/components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        Fathom.load('EXCDTTBJ', {
            includedDomains: [
                'postmortemr.com',
            ],
        });

        function onRouteChangeComplete() {
            Fathom.trackPageview();
        }

        router.events.on('routeChangeComplete', onRouteChangeComplete);

        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete);
        };
      }, []);

    return (
        <AppComponent>
            <Component {...pageProps} />
        </AppComponent>
    );
}

export default App;
