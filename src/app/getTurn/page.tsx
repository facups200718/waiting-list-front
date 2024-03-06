'use client'
import Titulo from "@/modules/title/Title";
import Styles from "./page.module.css";
import TextField from "@/modules/inputs/textField";
import Combo from "@/modules/inputs/combo"
import Button from "@/modules/Button/Button";
import Form from "@/components/form/form";

const motives = [
    {
        text:'Caja',
        value:'Caja',
    }, {
        text:'Asesoria',
        value:'Asesoria',
    }, {
        text:'Prestamos',
        value:'Prestamos',
    }, {
        text:'Consultas',
        value:'Consultas',
    }, {
        text:'Retiro de tarjetas',
        value:'retiro',
    },
]


export default function Home() {
  
    return (
      <main>
        <Titulo texto="Saca tu número"/>
        <section className={Styles.section}>
            <Form className={Styles.form} onSubmit={(data) => console.log(data)} >
                <TextField label="DNI" name="dni" placeholder="Ingrese DNI" maxLength={8} pattern="[0-9]{8}"/>
                <Combo label="Motivo" name="motive" options={motives} placeHolder="" />
                <div className={Styles.buttonCenter}>
                    <Button style={{backgroundColor: '#F20303'}} buttonClass="primary" type="submit">Continuar</Button>
                </div>
            </Form>  
        </section>
      </main>
    );
  }