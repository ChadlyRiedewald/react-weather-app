import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SearchMenuContextProvider } from './context/searchMenu/searchMenu.context';
import { WeatherDataContextProvider } from './context/weatherData/weatherData.context';
import { LocationContextProvider } from './context/location/location.context';
import { GeoLocationContextProvider } from './context/geoLocation/geoLocation.context';
import { TempMetricContextProvider } from './context/tempMetric/tempMetric.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SearchMenuContextProvider>
                <GeoLocationContextProvider>
                    <LocationContextProvider>
                        <WeatherDataContextProvider>
                            <TempMetricContextProvider>
                                <App />
                            </TempMetricContextProvider>
                        </WeatherDataContextProvider>
                    </LocationContextProvider>
                </GeoLocationContextProvider>
            </SearchMenuContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
