/**
 *
 * WARNING : fichier généré par forms, ne pas le modifier directement
 *
 **/

 

 const formData = [
  
  {
    name: 'subscriberId',
    required: false,
    input: 'hidden',
    source: '__UNDEFINED__',
    label: "__UNDEFINED__",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
  {
    name: 'externalId',
    required: true,
    input: 'hidden',
    source: '__UNDEFINED__',
    label: "__UNDEFINED__",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
  {
    name: 'beneficiaryType',
    required: true,
    input: 'select',
    source: 'beneficiaries',
    label: "Type de bénéficiaire *",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
  {
    name: 'civility',
    required: true,
    input: 'select',
    source: 'civilities',
    label: "Civilité *",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
  {
    name: 'firstName',
    required: true,
    input: 'text',
    source: '__UNDEFINED__',
    label: "Prénom *",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
  {
    name: 'lastName',
    required: true,
    input: 'text',
    source: '__UNDEFINED__',
    label: "Nom *",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
  {
    name: 'birthDate',
    required: true,
    input: 'birthdate',
    source: '__UNDEFINED__',
    label: "Date de naissance *",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
  {
    name: 'nic',
    required: false,
    input: 'nic',
    source: '__UNDEFINED__',
    label: "Numéro de sécurité sociale (optionnel)",
    placeholder: "__UNDEFINED__",
    
    handlers: {
      visible: undefined
    }
  },
  
 ];
 
 export default formData;
 