import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const CardInves = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://signal.org/assets/features/Media-9ebea788426f7eabd9756d3f5ec12a5b97b47b6fa8918cdff0004777f27e1fa3.png"
          />
          <Card.Body>
            <Card.Title>Di lo que quieras</Card.Title>
            <Card.Text>
              En SecureNet, creemos en el poder de la tecnología para
              transformar el mundo y mejorar la vida de las personas. Estamos
              comprometidos en proporcionar información valiosa y actualizada
              para ayudar a los usuarios a tomar decisiones informadas en un
              entorno digital cada vez más complejo.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://signal.org/assets/features/Calls-7d9c94d0e1937d6c9f265dcfd68b4d977d681f974a36f36bf14d1ae1beeadf12.png"
          />
          <Card.Body>
            <Card.Title>Habla con libertad</Card.Title>
            <Card.Text>
              En SecureNet, valoramos la libertad de expresión y entendemos su
              importancia en el mundo digital. Creemos que todos los usuarios
              tienen el derecho de expresarse y compartir sus opiniones de
              manera segura y protegida.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://signal.org/assets/features/Groups-2009b23758fe4fb3f6bb8e6cf61e41dedbeaa0a92b7734191a8565d2d7ee3cfc.png"
          />
          <Card.Body>
            <Card.Title>Únete a grupos</Card.Title>
            <Card.Text>
              ¡Claro! Unirse a grupos es una excelente manera de conectarse con
              personas afines e intercambiar ideas e intereses comunes. En
              SecureNet, fomentamos la participación en comunidades seguras y
              protegidas.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};
