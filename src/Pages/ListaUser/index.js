import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import Users from '../../Services/Users'
import Menu from '../../Components/Header/Menu';

const colunas = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'usuario', headerName: 'Usuario', width: 200 },
    { field: 'senha', headerName: 'Senha', width: 130 },
    { field: 'codigo', headerName: 'Assinatura', width: 170 },

];

// https://material-ui.com/pt/components/data-grid/

const ListaUser = () => {
    useEffect(async () => {
        Users.carregarUsuarios()
            .then(usuarios => setLista(usuarios))
            .catch(err => console.log(err))
    }, [])

    const deletar = () => {
        Users.deletarUsuarios(selected)
            .then(listaAtualizada => setLista(listaAtualizada))
            .catch(err => console.log(err))
    }


    const [lista, setLista] = useState([])
    const [selected, setSelected] = useState([])

    const history = useHistory()




    return (
        <div>
            <Menu />
            <h1>Lista Users</h1>
            {selected.length > 0 && (
                <Button variant="contained" color="secondary" onClick={deletar}>
                    Deletar
                </Button>
            )}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={lista}
                    columns={colunas}
                    pageSize={5}
                    checkboxSelection
                    onSelectionModelChange={(selection) => {
                        console.log(selection)
                        setSelected(selection);
                    }}
                />


            </div>
        </div>
    )
}

export default ListaUser