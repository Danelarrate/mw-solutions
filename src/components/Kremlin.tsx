export const Kremlin = () => {
  const svg = (
    <svg
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width={'2.5rem'}
      height={'2.5rem'}
      viewBox='0 0 80 95'
      enableBackground='new 0 0 80 95'
    >
      <path
        fill='#060606'
        opacity='1.000000'
        stroke='none'
        d='
M72.314133,44.835800 
	C79.283073,56.596611 77.382835,69.807365 66.772224,82.638824 
	C64.997559,79.526115 63.140873,76.690414 61.775917,73.635033 
	C61.330124,72.637154 62.083382,71.045425 62.427837,69.762772 
	C63.904480,64.264122 66.590607,58.801449 66.695450,53.284985 
	C66.896988,42.681080 60.235786,37.507652 47.556053,36.773197 
	C56.393501,33.445713 64.278465,35.944668 72.314133,44.835800 
z'
      />
      <path
        fill='#090909'
        opacity='1.000000'
        stroke='none'
        d='
M30.903969,30.996193 
	C28.022873,37.219631 25.340174,43.139839 22.849516,48.636250 
	C20.770000,44.306915 20.428627,38.622383 22.346600,33.160404 
	C28.020802,17.001472 40.429295,8.165295 56.393131,2.594856 
	C55.782143,9.652182 53.958286,14.341962 47.067242,17.550026 
	C41.017288,20.366531 36.369476,26.194881 30.903969,30.996193 
z'
      />
      <path
        fill='#070707'
        opacity='1.000000'
        stroke='none'
        d='
M16.031368,40.023674 
	C16.634398,49.945698 18.608271,52.595501 29.899572,59.075512 
	C23.643896,60.875153 14.391884,56.210575 9.872394,48.978436 
	C3.621462,38.975624 6.312200,23.499390 16.264193,12.838484 
	C16.554028,13.185607 16.843479,13.502165 17.099709,13.843650 
	C21.088587,19.159775 22.881626,24.350206 18.230419,30.559742 
	C16.522757,32.839531 16.709261,36.538139 16.031368,40.023674 
z'
      />
      <path
        fill='#060606'
        opacity='1.000000'
        stroke='none'
        d='
M27.082996,92.140915 
	C27.370766,86.402519 27.682432,81.315269 34.573837,78.506996 
	C44.002499,74.664764 51.338673,67.693954 55.561737,58.245274 
	C57.368912,54.201897 57.823334,49.553902 59.092846,44.360748 
	C62.327572,50.813713 62.628353,56.928379 60.297405,63.049561 
	C54.490398,78.299042 42.639389,86.942635 27.406757,92.100960 
	C27.049128,92.073639 27.082996,92.140915 27.082996,92.140915 
z'
      />
      <path
        fill='#090909'
        opacity='1.000000'
        stroke='none'
        d='
M43.960770,23.893620 
	C51.747787,18.909855 59.965237,17.270567 69.215218,17.674734 
	C66.517235,22.486982 63.942158,25.474861 57.813816,25.370356 
	C48.821102,25.217005 41.389626,29.819450 35.287518,36.403709 
	C34.289207,37.480900 33.171421,38.447365 31.747572,39.105476 
	C33.894852,32.555954 38.147697,27.798960 43.960770,23.893620 
z'
      />
      <path
        fill='#0A0A0A'
        opacity='1.000000'
        stroke='none'
        d='
M40.326210,70.406982 
	C32.303268,75.992035 23.643776,77.896545 13.691837,77.619110 
	C16.498655,73.215500 18.422714,69.592865 24.560781,69.825386 
	C33.211956,70.153099 40.491608,66.002441 46.564075,59.884407 
	C47.821499,58.617550 49.031124,57.303246 50.441509,55.823261 
	C50.690037,60.547043 47.819443,64.605545 40.326210,70.406982 
z'
      />
      <path
        fill='#060606'
        opacity='1.000000'
        stroke='none'
        d='
M27.027714,92.042664 
	C26.831350,92.170677 26.656404,92.329681 26.481457,92.488678 
	C26.577894,92.268784 26.674330,92.048882 26.926882,91.984955 
	C27.082996,92.140915 27.049128,92.073639 27.027714,92.042664 
z'
      />
    </svg>
  )
  return (
    <div className='inline-flex justify-center items-baseline uppercase text-xl font-bold'>
      Sames
      <span className=' translate-y-1/4'>
        <span className='animate-wiggle'>{svg}</span>
      </span>{' '}
      kremlin
    </div>
  )
}
