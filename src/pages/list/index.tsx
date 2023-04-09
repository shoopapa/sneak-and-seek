import { useEffect, useState } from 'react';
import { getQueryStringParams, shuffleArray } from '@/utils';
import { Button } from '@mui/material';


export default function RoutedComponent() {
  const [names, setNames] = useState<string[]>([])
  const [i, setI] = useState(0)
  useEffect(() => {
    const { data } = getQueryStringParams(window.location.search);
    if (data !== undefined) {
      const suffledList: string[] = shuffleArray(JSON.parse(data))
      console.log(suffledList)
      setNames(suffledList)
    }
  }, []);

  return (
    <main className="flex flex-col h-screen w-screen items-center justify-between p-6">
      <div id='hi' className='flex flex-col items-center justify-around content-center h-full w-full rounded-lg shadow-lg' >
        <p >{names[i]}&aposs Target is</p>
        <p >{i === names.length - 1 ? names[0] : names[i + 1]}</p>
        <div className='flex justify-around w-full' >
          <Button variant='outlined' disabled={i === 0} onClick={() => setI(i - 1)}>back</Button>
          <Button variant='outlined' disabled={i === names.length - 1} onClick={() => setI(i + 1)}>Next</Button>
        </div>
      </div >
    </main >
  )
};
