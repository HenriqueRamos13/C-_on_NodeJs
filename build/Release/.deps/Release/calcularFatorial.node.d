cmd_Release/calcularFatorial.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=10.15 -arch arm64 -L./Release -stdlib=libc++  -o Release/calcularFatorial.node Release/obj.target/calcularFatorial/src/fatorial.o 
