<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    $to = "victor1301@outlook.com"; // Seu e-mail
    $subject = "Novo Contato do Site";
    $message = "
    Nome: $nome\n
    E-mail: $email\n
    Telefone: $telefone\n
    Mensagem: $mensagem
    ";
    $headers = "From: $email" . "\r\n" . "Content-Type: text/plain; charset=UTF-8";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>
