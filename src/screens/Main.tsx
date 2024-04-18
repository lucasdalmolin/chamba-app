import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import UserProvider from '../context/UserProvider';
import { UserContext } from '../context/userContext';
import Title from '../components/Title/Title';

const Main = () => {
  const { userState } = useContext(UserContext);
  const { salary } = userState
  
  /**
   * Lista de componentes:
   * 
   * Title/Balance
   * 
   * Detalle
   *  /Ingresos
   *  /Gastos
   *    /personalizar tipo de gasto, tarjeta, efectivo, mp....
   *  /Ahorros
   * 
   * Ahorros
   *  /Cantidad (total)
   *    /Detalles
   *      /...
   *  /Disponibilidad para gastar el resto del mes
   *  /Resumen
   * 
   * IDEAS:
   * -permitir saber la diferencia de un gasto actual con respecto al mes pasado y los meses anteriores
   * -pensar en cambiar el foco de la app. Quitar ahorros y mas que nada evidenciar las diferencias de mes a mes.
   * -poner ahorro en dolares y quizas pesos.
   */

  return (
    <View>
      <Title title='Balance'/>
    </View>
  );
};

export default Main;
