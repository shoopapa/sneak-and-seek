
import TextField from '@mui/material/TextField';
import { useState, useRef } from 'react';
import { Button, IconButton } from '@mui/material';
import DeleteOutline from '@mui/icons-material/DeleteOutline';

export default function Home() {
  const [names, setNames] = useState<string[]>(['', '', ''])

  return (
    <main className="flex flex-col items-center justify-between p-6 pb-20">
      <div className='w-full'>
        <div className=' w-full'>
          {names.map((n, i) => {
            return (
              <div className='pb-4 flex' key={`dosis-${i}`}>
                <TextField
                  className='w-full'
                  label=""
                  variant="outlined"
                  value={n}
                  onChange={e => {
                    const newNames = [...names];
                    newNames[i] = e.target.value;
                    setNames(newNames);
                  }}
                />
                {i > 2 && (
                  <IconButton
                    onClick={() => {
                      const newNames = [...names];
                      newNames.splice(i, 1);
                      setNames(newNames);
                    }}
                    color="primary"

                    size='large'
                    className='rounded-md ml-2'
                  >
                    <DeleteOutline />
                  </IconButton>
                )}
              </div>
            )
          })}
        </div>
        <Button
          className='py-2'
          fullWidth
          variant='outlined'
          onClick={() => setNames([...names, ''])}
        > + </Button>
      </div>
      <div className="fixed bottom-0 right-0 m-4">
        <Button
          color='success'
          variant='outlined'
          className='py-2'
        >
          Start
        </Button>
      </div>
    </main >
  )
}
