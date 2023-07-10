<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\Mime\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, MailerInterface $mailer, EntityManagerInterface $entityManager): Response
    {

        $form = $this->createForm(ContactType::class);
        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
        
            $email = $data->getEmail(); // Access the email property using the getEmail() method
            $message = $data->getMessage(); // Access the message property using the getMessage() method
        
            $entityManager->persist($data);
            $entityManager->flush();

            $emailObject = (new Email())
                ->from('contact@firstcom.fr')
                ->to($email)
                ->subject('FIRSTCOM - Votre demande de contact.')
                ->text($message)
                ->html('<p>Bonjour</p>
                        <p>Nous avons bien reçu votre demande de contact.</p>
                        <p>Nous ne manquerons pas de revenir vers vous prochainement.</p>
                        <p>À bientôt.</p>
                        <p>Firstcom.</p>');
        
            $mailer->send($emailObject);
        }

        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
            'formulaire' => $form->createView(), // Use createView() to render the form
        ]);
    }
}


