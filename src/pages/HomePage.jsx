import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";

import { lazy } from 'react';

const ProductList = lazy(() => import("../components/ProductList"))

const HomePage = () => {
    return (
        <ErrorBoundary FallbackComponent={<div>Something went wrong</div>}>
            <Suspense fallback="Loading">
                <ProductList />
            </Suspense>
        </ErrorBoundary>

    )
}

export default HomePage