let password = '_-f'

if (password.length>=4 && (password.includes('-') || password.includes('_'))){
    console.log('пароль надежный')
}else{
    console.log('пароль ненадежный')
}