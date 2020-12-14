import { App as AppComponent } from 'src/components';
import 'src/styles/core.css';
import 'src/styles/custom.css';

function App({ Component, pageProps }) {
    return (
        <AppComponent>
            <Component {...pageProps} />
        </AppComponent>
    );
}

export default App;
