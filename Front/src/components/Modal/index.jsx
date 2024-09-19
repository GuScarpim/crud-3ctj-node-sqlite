/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  isOpen,
  onClose,
  product,
  isEditMode,
  onInputChange,
  onSaveProduct
}) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={style}>
        <h2>{isEditMode ? 'Editar' : 'Criar'}</h2>
        <TextField
          label="Nome"
          margin="dense"
          name="name"
          value={product?.name || ''}
          onChange={onInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          value={product?.email || ''}
          onChange={onInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Produto"
          name="produto"
          value={product?.produto || ''}
          onChange={onInputChange}
          fullWidth
        />
        <TextField
          label="URL"
          margin="dense"
          name="url"
          value={product?.url || ''}
          onChange={onInputChange}
          fullWidth
        />
        <TextField
          label="Preço"
          margin="dense"
          name="preco"
          value={product?.preco || ''}
          onChange={onInputChange}
          fullWidth
        />
        <Box styles={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Button onClick={onSaveProduct} variant="contained" color="primary" sx={{ width: '100%', mt: 2 }}>
            {
              isEditMode ? 'Salvar alterações' : 'Cadastrar produto'
            }
          </Button>
          <Button onClick={onClose} variant="outlined" sx={{ width: '100%', mt: 1 }}>Cancelar</Button>
        </Box>
      </Box>
    </Modal>
  );
}