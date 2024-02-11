const button_config={
    'fileButton':{
        'functionName': open_file_button,
        'cssClass':'file-button-toggle',
        'htmlContent':'<p>file_button_toggle</p>',
    },
    'editButton':{
        'functionName': open_edit_button,
        'cssClass':'edit-button-toggle',
        'htmlContent':'edit_button_toggle',    
    },
    'viewButton':{
        'functionName': open_view_button,
        'cssClass':'view-button-toggle',
        'htmlContent':'view_button_toggle',
    },
    'layerButton':{
        'functionName': open_layer_button,
        'cssClass':'layer-button-toggle',
        'htmlContent':'layer_button_toggle',
    
    },
    'imageButton':{
        'functionName': open_image_button,
        'cssClass':'image-button-toggle',
        'htmlContent':'image_button_toggle',
    
    },
    'colorButton':{
        'functionName': open_color_button,
        'cssClass':'color-button-toggle',
        'htmlContent':'color_button_toggle',
    
    },
    'helpButton':{
        'functionName': open_help_button,
        'cssClass':'help-button-toggle',
        'htmlContent':'help_button_toggle',
    },
};

function openbutton(button_id){
    const config=button_config[button_id];

    if(config){
        const { functionName, cssClass, htmlContent}=config;

        functionName(cssClass ,htmlContent);
    }
}
