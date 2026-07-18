with open(".github/workflows/split-sync.yml", "r") as f:
    content = f.read()

idx = content.find("            fi\n              for file")
if idx != -1:
    content = content[:idx+15]
    with open(".github/workflows/split-sync.yml", "w") as f:
        f.write(content)
        
