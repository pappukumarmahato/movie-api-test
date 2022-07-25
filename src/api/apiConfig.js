const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9250f3d11a6a5f37992afc2a67f22752',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;