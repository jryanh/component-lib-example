import './App.css'

import { CustomButton, PrimaryButton, SecondaryButton } from '../'

function App() {
  return (
    <>
      <CustomButton variant="outlined" onClick={() => console.log('button clicked')}>
        Test
      </CustomButton>
      <PrimaryButton onClick={() => console.log('button clicked')}>Test</PrimaryButton>
      <SecondaryButton onClick={() => console.log('button clicked')} color={'warning'}>
        Test
      </SecondaryButton>
    </>
  )
}

export default App
