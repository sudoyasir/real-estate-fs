import React from 'react';
import { Auth0ClientOptions, User } from '@auth0/auth0-spa-js';
import { Auth0ContextInterface } from './auth0-context';
/**
 * The state of the application before the user was redirected to the login page.
 */
export type AppState = {
    returnTo?: string;
    [key: string]: any;
};
/**
 * The main configuration to instantiate the `Auth0Provider`.
 */
export interface Auth0ProviderOptions extends Auth0ClientOptions {
    /**
     * The child nodes your Provider has wrapped
     */
    children?: React.ReactNode;
    /**
     * By default this removes the code and state parameters from the url when you are redirected from the authorize page.
     * It uses `window.history` but you might want to overwrite this if you are using a custom router, like `react-router-dom`
     * See the EXAMPLES.md for more info.
     */
    onRedirectCallback?: (appState?: AppState, user?: User) => void;
    /**
     * By default, if the page url has code/state params, the SDK will treat them as Auth0's and attempt to exchange the
     * code for a token. In some cases the code might be for something else (another OAuth SDK perhaps). In these
     * instances you can instruct the client to ignore them eg
     *
     * ```jsx
     * <Auth0Provider
     *   clientId={clientId}
     *   domain={domain}
     *   skipRedirectCallback={window.location.pathname === '/stripe-oauth-callback'}
     * >
     * ```
     */
    skipRedirectCallback?: boolean;
    /**
     * Context to be used when creating the Auth0Provider, defaults to the internally created context.
     *
     * This allows multiple Auth0Providers to be nested within the same application, the context value can then be
     * passed to useAuth0, withAuth0, or withAuthenticationRequired to use that specific Auth0Provider to access
     * auth state and methods specifically tied to the provider that the context belongs to.
     *
     * When using multiple Auth0Providers in a single application you should do the following to ensure sessions are not
     * overwritten:
     *
     * * Configure a different redirect_uri for each Auth0Provider, and set skipRedirectCallback for each provider to ignore
     * the others redirect_uri
     * * If using localstorage for both Auth0Providers, ensure that the audience and scope are different for so that the key
     * used to store data is different
     *
     * For a sample on using multiple Auth0Providers review the [React Account Linking Sample](https://github.com/auth0-samples/auth0-link-accounts-sample/tree/react-variant)
     */
    context?: React.Context<Auth0ContextInterface>;
}
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   authorizationParams={{ redirect_uri: window.location.origin }}}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */
declare const Auth0Provider: (opts: Auth0ProviderOptions) => JSX.Element;
export default Auth0Provider;
//# sourceMappingURL=auth0-provider.d.ts.map