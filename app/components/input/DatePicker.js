import React from 'react';
import MomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import 'moment/locale/fr';
import moment from 'moment';
moment.locale('fr');

const DatePicker = ({ value, onChange, field }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        InputProps={{
          disableUnderline: true
        }}
        style={{ width: '100%' }}
        disableToolbar
        format={'DD/MM/yyyy'}
        margin="normal"
        id="date-picker-inline"
        placeholder={field.placeholder}
        openTo="year"
        value={value}
        onChange={onChange}
        helperText
        error
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
        locale="fr"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
