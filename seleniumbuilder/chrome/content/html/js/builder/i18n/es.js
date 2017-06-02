var m = {};
builder.translate.addLocale({'name':'es', 'title': "Spanish", 'mapping': m});

// General
m.ok = "Aceptar";
m.cancel = "Cancelar";

// Locale selection GUI
m.select_locale = "Seleccione idioma";
m.new_locale_after_restart = "El nuevo idioma se aplicará tras reiniciar Builder.";

// Startup view
m.open_script_or_suite = "Abrir un test o suite de tests";
m.view_command_table = "Ver comandos soportados por Selenium 1 y 2";
m.manage_plugins = "Gestionar complementos"
m.start_recording_at = "Empezar grabacion en";
m.cookie_warning = "Esto borrara todas las cookies para el dominio que se va a grabar.";

// Steps table
m.steps_table = "Tabla de pasos";
m.show_step_type_orphans = "Mostrar pasos de Selenium 1 que no tienen correspondencia en Selenium 2.";
m.step_name = "Nombre";
m.sel_1_translation = "Traduccion a Selenium 1";
m.negatable = "No comparable";
m.local_playback_available = "Reproducir en local";
m.yes = "si"; // Yes means yes.
m.no = "no";   // No means no.
               // Oh no! Politics in our source code!
m.search = "Buscar";

// Plugins
m.plugins_title = "Complementos";
m.plugins_back = "Volver";
m.plugins_refresh = "Refrescar";
m.plugins_reboot = "Reiniciar Builder";
m.plugins_loading = "Cargando...";
m.plugins_downloading = "Descargando...";
m.plugin_disabled = "Desabilitado";
m.plugin_installed = "Instalado";
m.plugin_installed_to_enable = "Instalado, se activará tras el reinicio de Builder";
m.plugin_installed_to_disable = "Installed, se desactivará tras el reinicio de Builder";
m.plugin_not_installed = "No instalado";
m.plugin_to_install = "Reiniciar Builder para instalar";
m.plugin_to_uninstall = "Reiniciar Builder para desinstalar";
m.plugin_to_update = "Instalado, reiniciar para actualizar";
m.plugin_update_available = ", actualizacion a version {0} disponible";
m.plugin_install = "Instalar";
m.plugin_install_and_reboot = "Instalar y reiniciar";
m.plugin_cancel_install = "Cancelar instalación";
m.plugin_uninstall = "Desinstalar";
m.plugin_uninstall_and_reboot = "Desinstalar y reiniciar";
m.plugin_cancel_uninstall = "Cancelar desinstalación";
m.plugin_update = "Actualizar";
m.plugin_update_and_reboot = "Actualizar y reiniciar";
m.plugin_cancel_update = "Cancelar actualización";
m.plugin_enable = "Activar";
m.plugin_enable_and_reboot = "Activar y reiniciar";
m.plugin_disable = "Desactivar";
m.plugin_disable_and_reboot = "Desactivar y reiniciar";
m.plugin_list_too_new = "El formato de datos de la lista de complementos es demasiado nuevo. Por favor actualiza Builder.";
m.unable_to_fetch_plugins = "Fue imposible obtener complementos";
m.plugin_load_timed_out = "El tiempo de carga fue excesivo.";
m.plugin_url_not_found = "no encontrado";
m.plugin_missing_dir = "No se encuentra el directorio del complemento en {0}.";
m.plugin_not_a_dir = "El directorio del complemento en {0} no es un directorio sino un fichero.";
m.plugin_header_missing = "No se encuentra la cabecera del complemento en {0}.";
m.plugin_header_not_file = "La cabecera del complemento en {0} no es un fichero.";
m.plugin_header_file_corrupted = "El fichero de cabecera en {0} esta corrupto, tiene un error sintáctico, or no es un fichero JSON: {1}";
m.plugin_header_file_no_version = "El fichero de cabecera en {0} no tiene version.";
m.plugin_builder_too_old = "Esta version de Builder is demasiado antigua para usar este complemento. Por favor actualize a la version más nueva.";
m.plugin_id_mismatch = "El ID del complemento en la cabecera ({0}) no corresponde con el ID esperado ({1}).";
m.plugin_version_invalid = "La version del complemento es inválida.";
m.plugin_cant_verify = "Fue imposible verificar el complemento: {0}";
m.plugin_unable_to_install = "No se pudo instalar {0}: {1}";
m.plugin_unable_to_uninstall = "No se pudo desinstalar {0}: {1}";
m.plugin_disabled_builder_too_old = "El complemento ha sido deshabilitado \"{0}\": Esta version de Builder es demasiado antigua para este complemento.\nLa mínima version de Builder soportada es: {1}. La versión actual de Builder es: {2}.\nPor favor, actualize Builder y entonces vuelva a activar el complemento.";
m.plugin_disabled_builder_too_new = "El complemento ha siso dehabilitado \"{0}\": Esta version del complemento es demasiado antigua.\nLa version máxima de Builder soportada es: {1}. La versión actual de Builder es: {2}.\nIntente actualizar el complemento.";
m.cant_update_builder_too_old = ", la actualizacion a la version {0} no pudo ser aplicada: Builder no está actualizado";
m.cant_update_builder_too_new = ", la actualizacion a la version {0} no pudo ser aplicada: El complemento es demasiado antiguo";
m.cant_install_builder_too_old = "; fue imposible instalar: Builder no está actualizado";
m.cant_install_builder_too_new = "; fue imposible instalar: El complemento es demasiado antiguo";
m.updates_available = "Actualizaciones disponibles";
m.plugin_download_failed = "No se pudo completar la descarga del complemento.";

// Menus
m.menu_file = "Fichero";
m.menu_record = "Grabar";
m.menu_run = "Ejecutar";
m.menu_suite = "Suite de tests";
m.menu_settings = "Configuración de test...";
m.menu_save = "Guardar";
m.menu_save_to = "Guardar a {0}";
m.menu_save_as = "Guardar como...";
m.menu_export = "Exportar...";
m.menu_convert = "Convertir a otra versión...";
m.menu_convert_to = "Convertir a {0}";
m.menu_discard = "Descartar y comenzar desde el principio";
m.menu_run_locally = "Ejecutar el test localmente";
m.menu_run_on_rc = "Ejecutar en Selenium Server";
m.menu_run_suite_locally = "Ejecutar suite localmente";
m.menu_run_suite_on_rc = "Ejecutar suite en Selenium Server";
m.menu_suite_remove_script = "Eliminar el test actual";
m.menu_add_script_from_file = "Añadir test desde fichero";
m.menu_record_new_script = "Grabar nuevo test";
m.menu_discard_suite = "Descartar el suite y comenzar desde el principio";
m.menu_save_suite = "Guardar suite";
m.menu_save_suite_to = "Guardar suite a {0}";
m.menu_save_suite_as = "Guardar suite como...";
m.menu_export_suite = "Exportar suite de test";
m.lose_changes_warning = "Si continua, perderá todos sus cambios recientes.";
m.menu_debug = "Depurar";
m.menu_disable_breakpoints = "√ Habilitar puntos de interrupción";
m.menu_enable_breakpoints = "Deshabilitar puntos de interrupción";
m.menu_clear_breakpoints = "Eliminar todos los puntos de interrupción";
m.clear_breakpoints_confirm = "Esta usted seguro que quiere eliminar todos los puntos de interrupción del test actual?";
m.menu_playback_variables = "Variables de reproducción...";
m.menu_share_state_across_suite = "Compartir estado dentro del suite";
m.menu_dont_share_state_across_suite = "√ Compartir estado dentro del suite";

// Variables
m.variables = "Variables";

// Script
m.untitled_script = "Test sin título";

// Step display
m.suite_has_unsaved_changes = "Hay cambios sin guardar en el suite.";
m.suite_cannot_save_unsaved_scripts = "El suite no se puede guardar: Primero debe guardar todos los test en el mismo formato.";
m.cannot_save_suite_due_to_mixed_versions = "El suite no se puede guardar: Todos los test deben ser de la misma version de Selenium.";
m.stop_playback = "Parar reproducción";
m.continue_playback = "Continuar";
m.stopping = "Parando...";
m.clear_results = "Limpiar resultados";
m.connecting = "Conectando...";
m.record_verification = "Grabar una verificación";
m.stop_recording = "Para grabación";
m.record_mouseovers = "Grabar mouseovers";

// Convert dialog
m.script_conversion = "Conversion";
m.the_following_steps_cant_be_converted = "Los siguientes pasos no pueden ser convertidos";

// Export dialog
m.choose_export_format = "Elija formato de exportación";
m.sel2_unsaveable_steps = "El test contiene pasos que no pueden ser guardados como Selenium 2";
m.save = "Guardar";
m.unsupported_steps = "No soportado";
m.export_as_X_to_Y = "Exportar de {0} a {1}";
m.save_as_X = "Guardar como {0}";

// RC dialog
m.run_script = "Ejecutar";
m.selenium_rc_settings = "Preferencias de Selenium Server";
m.rc_server_host_port = "Host:Puerto de Selenium Server";
m.rc_browser_string = "Nombre de navegador";
m.rc_browser_version = "Versión de navegador";
m.rc_platform = "Plataforma";

// Record dialog
m.start_recording_new_script_at = "Comenzar grabación de un nuevo test en";

// Run all dialog
m.view_run_result = "Ver resultado";
m.running_scripts = "Ejecutando test...";
m.stop = "Parar";
m.close = "Cerrar";
m.done_exclamation = "Hecho!";

// Suite
m.cant_save_suite_must_save_as_html = "El suite no pudo ser guardado. Por favor guarde todos los test al disco como HTML antes de nada.";

// Gui
m.unsaved_changes_warning = "Se perderan todos los cambios no guardados!";

// UI
m.unable_to_read_file = "Lo sentimos mucho pero fue imposible leer el fichero.";
m.select_a_file = "Seleccione un fichero";

// Record
m.record_invalid_url = "La dirección URL no puede ser cargada porque no es válida.";

// Settings
m.script_settings = "Preferencias de test";
m.timeout_seconds = "Timeout (segundos)";

// Sel 1
m.sel1_could_not_open_suite_script = "No se pudo abrir el suite: No se pudo abrir el test {0}";
m.sel1_couldnt_save_suite = "No se pudo guardar el suite:\n{0}";
m.sel1_couldnt_export_script = "No se pudo exportar el test:\n{0}";
m.sel1_playback_failed = "Ha fallado";
m.sel1_unknown_failure_reason = "Razon del fallo desconocida";
m.sel1_test_stopped = "Test parado";

// Sel 2
m.save_as = "Guardar como...";
m.sel2_cant_export_step_type = "No se puede exportar el paso del tipo \"{0}\".";
m.sel2_variable_not_set = "La variable no se ha establecido: {0}.";
m.sel2_text_not_present = "Texto \"{0}\" no presente.";
m.sel2_body_text_does_not_match = "El texto del cuerpo no coincide \"{0}\".";
m.sel2_element_not_found = "Elemento no encontrado.";
m.sel2_source_does_not_match = "La fuente no coincide.";
m.sel2_element_text_does_not_match = "El texto del elemento \"{0}\" no coincide \"{1}\".";
m.sel2_url_does_not_match = "URL \"{0}\" no coincide \"{1}\".";
m.sel2_title_does_not_match = "Título \"{0}\" no coincide \"{1}\".";
m.sel2_element_not_selected = "Elemento no seleccionado.";
m.sel2_element_value_doesnt_match = "El valor del elemento \"{0}\" no coincide \"{1}\".";
m.sel2_attribute_value_doesnt_match = "el valor del atributo \"{0}\", valor: \"{1}\" no coincide \"{2}\".";
m.sel2_css_value_doesnt_match = "el valor de la propiedad CSS \"{0}\", valor: \"{1}\" no coincide \"{2}\".";
m.sel2_cookie_value_doesnt_match = "el valor de la cookie \"{0}\", valor: \"{1}\" no coincide \"{2}\".";
m.sel2_no_cookie_found = "Cookie \"{0}\" no encontrada.";
m.sel2_step_not_implemented_for_playback = "{0} no implementado para reproducción.";
m.sel2_alert_text_does_not_match = "El texto de alerta \"{0}\" no coincide \"{1}\".";
m.sel2_no_alert_present = "Alerta no presente.";
m.sel2_is = "es";
m.sel2_true = "verdad";
m.sel2_false = "falso";
m.sel2_untitled_run = "Sin título";
m.sel2_server_error = "Error de servidor";
m.sel2_must_playback_in_foreground = "Nota: La ventana de reproducción debe permanecer en primer plano durante la reproducción en local.";
m.sel2_eval_failed = "La evaluacion del test ha fallado.";
m.sel2_eval_false = "El resultado evaluado \"{0}\" no coincide \"{1}\".";

// Step display
m.param_expr_info = "<br>Los parametros de las expresiones del formulario <i>${varname}</i> son reemplazados por el contenido de la variable <i>varname</i>";
m.negate_assertion_or_verification = "Negar aserción/verificación";
m.find_a_different_target = "Encontrar un objetivo distinto";
m.suggested_locator_alternatives = "Sugerencias alternativas:";
m.step_edit_type = "editar tipo";
m.step_delete = "borrar paso";
m.step_new_above = "nuevo paso encima";
m.step_new_below = "nuevo paso debajo";
m.step_copy = "copiar";
m.step_cut = "cortar";
m.step_paste = "pegar";
m.step_record_before = "grabar antes";
m.step_record_after = "grabar despues";
m.step_run = "ejecutar paso";
m.step_run_from_here = "ejecutar desde aquí";
m.step_run_to_here = "ejecutar hasta aquí";
m.step_add_breakpoint = "añadir punto de interrupción";
m.step_remove_breakpoint = "eliminar punto de interrupción";
m.playback_not_supported_warning = "Atención: este tipo de paso no es soportado para reproducción.";
m.edit_p = "editar {0}";
m.not = "no";
m.find = "Encontrar";

// IO
m.script_is_empty = "Test esta vacío.";
m.suite_is_empty = "Suite esta vacío.";
m.suite = "Suite";
m.could_not_open_suite = "El suite no pudo ser abierto";
m.sel1_no_table_tag = "No se pudo cargar el suite: la etiqueta <table> no se ha encontrado";
m.sel1_no_command_found = "Comando desconocido en test";
m.unable_to_fetch_data = "Fue imposible acceder a datos externo para la reproducción del test: {0}";
m.unable_to_load_file = "Fue imposible cargar el fichero {0}.";

// Selenium 1 Categories
m.action_cat = "acción";
m.assertion_cat = "aserción";
m.wait_cat = "esperar";
m.other_cat = "otro";
m.store_cat = "archivar";
m.clicks_cat = "clicks";
m.mouse_events_cat = "eventos de ratón";
m.keyboard_events_cat = "eventos de teclado";
m.keyboard_modifiers_cat = "modificadores de teclado";
m.form_fields_cat = "campos de formulario";
m.browsing_cat = "navegando";
m.popups_and_menus_cat = "popups y menus";
m.page_content_cat = "contenido de página";
m.page_positioning_cat = "posicionamiendo de página";
m.popups_cat = "popups";
m.browser_window_cat = "ventana de navegador";
m.form_fields_cat = "campos de formulario";
m.selenium_cat = "selenium";
m.cookies_cat = "cookies";
m.common_cat = "común";
m.selenium_settings_cat = "preferencias de selenium";
m.screenshots_cat = "pantallazos";
m.cookies_cat = "cookies";
m.special_cat = "especial";
m.extensions_cat = "extensiones";

// Selenium 2 Categories
m.navigation_sel2_cat = "Navegación";
m.input_sel2_cat = "Entrada";
m.misc_sel2_cat = "Misc";
m.assertion_sel2_cat = "Aserción";
m.verify_sel2_cat = "Verificar";
m.wait_sel2_cat = "Esperar";
m.store_sel2_cat = "Archivar";

// Data-driven
m.menu_data = "Datos";
m.no_source = "Sin datos";
m.manual_entry = "Entrada manual";
m.json_file_path = "Ruta fichero JSON";
m.xml_file_path = "Ruta fichero XML";
m.csv_file_path = "Ruta fichero CSV";
m.csv_parse_error = "Error al analizar CSV: {0}";
m.row = "Fila {0}"
m.inputs = "Entradas";
m.string = "Cadena";
m.integer = "Entero";
m.int = "Entero";



if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }
