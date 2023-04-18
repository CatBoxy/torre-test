import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import User from './components/views/User/User'
import Skill from './components/views/Skill/Skill'
import './App.css'

const Error404 = lazy(() => import('./components/views/Error404/Error404'));

const pageTransition = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0,
  },
}

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
                <User />
              </motion.div>
            } />
          <Route
            path='/:skill'
            element={
              <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
                <Skill />
              </motion.div>
            } />
          <Route
            path='*'
            element={
              <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
                <Suspense fallback={<>...</>}>
                  <Error404 />
                </Suspense>
              </motion.div>
            } />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
