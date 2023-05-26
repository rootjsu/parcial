import React from 'react'

export const FooterP = () => {
  return (
    <div>
   <footer class="footer bg-dark">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5 class="text-white">SecureNet</h5>
        <p class="text-white">Tu privacidad, nuestra prioridad.</p>
      </div>
      <div class="col-md-4">
        <h5 class="text-white">Enlaces útiles</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white">Inicio</a></li>
          <li><a href="#" class="text-white">Acerca de nosotros</a></li>
          <li><a href="#" class="text-white">Política de privacidad</a></li>
          <li><a href="#" class="text-white">Contacto</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5 class="text-white">Síguenos</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white"><i class="fab fa-facebook">Facebook</i></a></li>
          <li><a href="#" class="text-white"><i class="fab fa-twitter"></i>Twitter</a></li>
          <li><a href="#" class="text-white"><i class="fab fa-instagram"></i>Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <p class="text-white">&copy; 2023 SecureNet. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
