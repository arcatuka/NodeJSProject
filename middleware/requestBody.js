// export function parseRequestBody(request) {
//     try {
//       return new Promise(function(resolve, reject){
//         const chunks = []
        
//         request.on('data', (chunk) => {
//             chunks.push(chunk)
//           })
//         request.on('end', () => {
//             const data = JSON.parse(chunks.length > 0 ? chunks : '{}')
//             request.body = data
//             resolve(chunks)
//           })
//       })
//     } catch (err) {
//         const message = err.message || 'Invalid request!'
//         res.statusCode = 400
//         res.end(message)
//     }
// }

    // else if(!user || user ===null){
    //   res.statusCode = 40
    //   return res.end('bad request')
    // }

