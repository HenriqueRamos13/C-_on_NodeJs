#include <node_api.h>
#include <cmath>

napi_value ComputacaoIntensiva(napi_env env, napi_callback_info info) {
    // Chama a função C++ que realiza a computação intensiva
    double resultado = 0;
    for (double i = 0; i < 50e9; i++) {
        resultado += std::sqrt(i);
    }

    // Cria um valor napi para armazenar o resultado
    napi_value result;
    napi_create_double(env, resultado, &result);

    return result;
}

napi_value Init(napi_env env, napi_value exports) {
    // Cria a função de wrapper
    napi_value fn;
    napi_create_function(env, nullptr, 0, ComputacaoIntensiva, nullptr, &fn);

    // Define a função no objeto de exportação
    napi_set_named_property(env, exports, "ComputacaoIntensiva", fn);

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)