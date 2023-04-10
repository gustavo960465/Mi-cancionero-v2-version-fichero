;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_mi_cancionero',
  urlsToCache = [
    './',
    './css/style.css',
    './css/css/bootstrap.css',
    './css/css/bootstrap.min.css',
    './css/css/bootstrap.rtl.css',
    './css/css/bootstrap.rtl.min.css',
    './css/css/bootstrap-grid.css',
    './css/css/bootstrap-grid.min.css',
    './css/css/bootstrap-grid.rtl.css',
    './css/css/bootstrap-grid.rtl.min.css',
    './css/css/bootstrap-reboot.css',
    './css/css/bootstrap-reboot.min.css',
    './css/css/bootstrap-reboot.rtl.css',
    './css/css/bootstrap-reboot.rtl.min.css',
    './css/css/bootstrap-utilities.css',
    './css/css/bootstrap-utilities.min.css',
    './css/css/bootstrap-utilities.rtl.css',
    './css/css/bootstrap-utilities.rtl.min.css',
    './css/js/bootstrap.bundle.js',
    './css/js/bootstrap.bundle.min.js',
    './css/js/bootstrap.esm.js',
    './css/js/bootstrap.esm.min.js',
    './css/js/bootstrap.js',
    './css/js/bootstrap.min.js',
    './css/estiloMediaQuery.css',
    './img',
    './insertar/insertarBorrarCancion.php',
    './insertar/insertarBuscar.php',
    './insertar/insertarEditarCancion.php',
    './insertar/insertarIniciarSesion.php',
    './insertar/InsertarMiRepertorio1.php',
    './insertar/InsertarMiRepertorio2.php',
    './insertar/insertarNuevaCancion.php',
    './insertar/insertarQuitarMusica.php',
    './insertar/insertarQuitarMusica_2.php',
    './insertar/insertarQuitarMusicaTodo.php',
    './insertar/insertarRegistro.php',
    './insertar/insertarSoporteTecnico.php',
    './js/buscar.js',
    './js/doctype.js',
    './js/formularioEditarBorrarCancion.js',
    './js/formularioMiProgramaMusical.js',
    './js/formularioOlvidoDeContrasena.js',
    './js/formularioPerfil.js',
    './js/formularioVersionCancion.js',
    './js/guardarFormularioMiProgramaMusical.js',
    './js/iniciarSesion.js',
    './js/jquery-3.6.0.min.js',
    './js/miBiblioteca.js',
    './js/miProgramaMusical_2.js',
    './js/miRepertorio_1.js',
    './js/NuevaCancion.js',
    './js/nuevaContrasena.js',
    './js/registro.js',
    './js/soporteTecnico.js',
    './js/sweetalert2.all.min.js',
    './js_Json/formularioEditarBorrarCancion.js',
    './js_Json/miRepertorio1.js',
    './js_Json/miRepertorio2.js',
    './js_Json/perfil.js',
    './js_Json_Mi_repertorio/js_Json_Mi_repertorio_1.js',
    './js_Json_Mi_repertorio/js_Json_Mi_repertorio_2.js',
    './miBlibioteca/todasLasCanciones.json',
    './usuario_registrado/todasLasCanciones.json',
    './bodyFooter.php',
    './cerrarSesion.php',
    './doctype.php',
    './formularioEditarBorrarCancion.php',
    './formularioMiProgramaMusical.php',
    './formularioMiRepertorio1.php',
    './formularioMiRepertorio2.php',
    './formularioPerfil.php',
    './formularioVersionCancion.php',
    './header.php',
    './index.php',
    './manifest.json',
    './miBiblioteca.php',
    './miRepertorio1.php',
    './miRepertorio2.php',
    './nuevaCancion.php',
    './registro.php',
    './script.php',
    './iniciarSesion.php',
    './soporteTecnico.php',
    './sw.php',
    './js/sweetalert2.all.min.js',
    './img/libro_1024.png',
    './img/favicon.icon',
    './<script data-ad-client="ca-pub-6827550241749383" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})