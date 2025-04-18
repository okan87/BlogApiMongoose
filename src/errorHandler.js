"use strict"

module.exports = (err, req, res, next) => {
    // Hataları loglama (örneğin, bir hata izleme aracı ile)
    console.error(err);

    // Geliştirme ve üretim ortamı ayrımı
    const isProduction = process.env.NODE_ENV === "development";

    return res.status(err.status || 500).send({
        error: true, // Hata olduğunu belirtir
        message: err.message, // Hata mesajı
        cause: err.cause, // Hatanın sebebi (varsa)
        body: req.body, // İsteğin gövdesi (varsa)
        stack: isProduction ? undefined : err.stack // Hata yığın izleme (sadece geliştirme ortamında) 
    });
};