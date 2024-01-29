const data = [
    {
      "name": "alice",
      "title": "ceo",
      "salary": 100,
      "reports": [
        {
          "name": "bob",
          "title": "cfo",
          "salary": 10,
          "reports": [
            {
              "name": "zorp",
              "title": "controller",
              "salary": 40
            }
          ]
        }
      ]
    }
  ]
  
  const dataFine = [
    {
      "name": "alice",
      "title": "ceo",
      "salary": 100
    }
  ];
  
  
  const dataFailedType = [
    {
      "name": "alice",
      "title": "ceo",
      "salary": "not a number" // This should be a number according to the schema
    }
  ];
  
  
  const dataMissingProp = [
    {
      "title": "ceo",
      "salary": 100 // Missing the 'name' property which is required
    }
  ];
  
  
  const dataInvalidProp = [
    {
      "name": "alice",
      "title": "ceo",
      "salary": 100,
      "age": 30 // 'age' is not defined in the schema
    }
  ];
  
  
  
  schema = {
    "employee": [
      {
        "name": "name",
        "required": true,
        "type": "string"
      },
      {
        "name": "title",
        "required": true,
        "type": "string"
      },
      {
        "name": "salary",
        "required": true,
        "type": "number"
      },
      {
        "name": "remote",
        "required": false,
        "type": "boolean"
      }
      // ,
      // {
      //   "name": "reports",
      //   "required": false,
      //   "type": "array:employee"
      // },
      // {
      //   "name": "subordinates",
      //   "required": false,
      //   "type": "array:employee"
      // }
    ]
  }
  
  function checkProperty(employee, schemaProperties, validProps) {
      
      const ValidationStatus = {
        FINE: {"ok": true, "message": "success"},
        FAILED_TYPE: {"ok": false, "message": "Failed type"},
        MISSING_PROP: {"ok": false, "message": "Missing prop"},
        INVALID_PROP: {"ok": false, "message": "Invalid prop"}
      };    
      
    // Check for invalid properties in the employee object
    for (let prop in employee) {
      if (!validProps.has(prop)) {
        return ValidationStatus.INVALID_PROP; // The employee has a property that's not defined in the schema
      }
    }
  
    // Check for missing or incorrectly typed properties according to the schema
    for (let schemaProp of schemaProperties) {
      if (schemaProp.required && employee[schemaProp.name] === undefined) {
        return ValidationStatus.MISSING_PROP; // Required property is missing
      }
      if (employee[schemaProp.name] !== undefined && typeof employee[schemaProp.name] !== schemaProp.type) {
        return ValidationStatus.FAILED_TYPE; // Property exists but is of the wrong type
      }
    }
  
    // If we've passed both checks, the property is valid
    return ValidationStatus.FINE;
  }
  
  
  function validate(employees, schema){
      let result = {"ok": true, "message": "success"}
      
      const validProps = new Set(schema.employee.map(prop => prop.name));
      
      for (let employee of employees) {
          const validationResult = checkProperty(employee, schema.employee, validProps);
          if (!validationResult.ok) {
              return validationResult; // Return early if any validation fails
          }
          if (employee.reports) {
              const reportsValidation = validate(employee.reports, schema);
              if (!reportsValidation.ok) {
                  return reportsValidation; // Return early if any nested validation fails
              }
          }
      }
      
      
  
      // console.log(JSON.stringify(Array.from(validProps)));
      // console.log(JSON.stringify(validProps))
  
      return result; 
  }
  
  
  // validate(data, schema)
  console.log(validate(dataFine, schema));          // Should return 
  console.log(validate(dataFailedType, schema));    // Should return 
  console.log(validate(dataMissingProp, schema));   // Should return 
  console.log(validate(dataInvalidProp, schema));   // Should return 
  
  console.log(validate(data, schema))
  
  