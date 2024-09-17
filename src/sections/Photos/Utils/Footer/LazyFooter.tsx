
import { Suspense, useRef } from 'react'
import React from 'react';
import { useNearScreen } from '../Hooks/useNearScreen';

const MiddleFooter = React.lazy(
    ()=> import('./Footer')
)
export function LazyFooter() {
    const elementRef = useRef(null);
    const isNearScreen = useNearScreen(elementRef, '100px');
    return <div className="" ref={elementRef}>
       <Suspense fallback={'Estoy cargando'}>
       {isNearScreen ? <MiddleFooter /> : null}
       </Suspense>
    </div>
}