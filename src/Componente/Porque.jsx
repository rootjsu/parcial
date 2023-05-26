import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const Porque = () => {
  return (
    <div>
      <br />
      <h2 style={{ textAlign: "center" }}>Por que Confiar en SecureNet</h2>
      <br />
      <p style={{ textAlign: "center" }}>
        En SecureNet, estamos comprometidos con tu privacidad y seguridad en
        línea. Nos aseguramos de mantenerte actualizado sobre las últimas
        aplicaciones que garantizan la confidencialidad de tus datos y te
        permiten tener el control total de tu información personal. Si valoras
        tu privacidad y buscas una experiencia de chat diferente, ¡contáctanos
        en SecureNet y descubre cómo puedes proteger tus comunicaciones
        digitales sin comprometer la funcionalidad que necesitas!
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Descripción</Accordion.Header>
          <Accordion.Body>
            SecureNet es una empresa comprometida en brindar información
            confiable y precisa sobre aplicaciones móviles que respetan la
            privacidad de sus usuarios. Nos dedicamos a investigar y evaluar
            exhaustivamente las características de las aplicaciones con el
            objetivo de informar a los usuarios sobre aquellas que garantizan la
            seguridad y la protección de sus datos personales. Nuestro enfoque
            principal es empoderar a los usuarios para que tomen decisiones
            informadas y protejan su privacidad en el mundo digital.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Misión</Accordion.Header>
          <Accordion.Body>
            Nuestra misión en SecureNet es educar y asesorar a los usuarios
            sobre las mejores opciones de aplicaciones móviles que priorizan la
            privacidad. Buscamos crear conciencia sobre la importancia de
            proteger los datos personales y fomentar un entorno digital más
            seguro para todos.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Visió</Accordion.Header>
          <Accordion.Body>
            Nos esforzamos por convertirnos en el recurso de confianza para los
            usuarios en su búsqueda de aplicaciones móviles seguras y
            respetuosas de la privacidad. Queremos ser reconocidos como líderes
            en la industria de la privacidad, brindando información actualizada
            y objetiva que permita a las personas tomar decisiones informadas
            para proteger su privacidad en el mundo digital.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Equipo</Accordion.Header>
          <Accordion.Body>
            Contamos con un equipo de expertos en seguridad de datos y
            privacidad en línea, comprometidos con la protección de los usuarios
            y el fomento de un entorno digital seguro. En SecureNet, nuestra
            prioridad es ayudar a los usuarios a proteger su privacidad y tomar
            decisiones informadas al elegir aplicaciones móviles. Estamos aquí
            para brindar información confiable y mantener a los usuarios al
            tanto de las últimas novedades en materia de privacidad y seguridad
            digital.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br /><br />
    </div>
  );
};
