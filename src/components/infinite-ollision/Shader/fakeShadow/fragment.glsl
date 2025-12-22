uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
  float shadow = texture2D(uTexture, vUv).r;
  float alpha = 1.0 - shadow;
  gl_FragColor = vec4(0.0, 0.0, 0.0, alpha * 0.3);
}
