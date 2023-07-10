<?php

// ContactType.php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'attr' => [
                    'placeholder' => 'Nom*',
                    'class' => 'form-control',
                    'id' => 'name_input',
                ],
                'label_attr' => [
                    'class' => 'sr-only',
                ],
            ])
            ->add('firstname', null, [
                'attr' => [
                    'placeholder' => 'Prénom*',
                    'class' => 'form-control',
                    'id' => 'firstname_input',
                ],
                'label_attr' => [
                    'class' => 'sr-only',
                ],
            ])
            ->add('society', null, [
                'attr' => [
                    'placeholder' => 'Société*',
                    'class' => 'form-control',
                    'id' => 'society',
                ],
                'label_attr' => [
                    'class' => 'sr-only',
                ],
            ])
            ->add('tel', null, [
                'attr' => [
                    'placeholder' => 'Téléphone*',
                    'class' => 'form-control',
                    'id' => 'telephone_input',
                ],
                'label_attr' => [
                    'class' => 'sr-only',
                ],
            ])
            ->add('email', null, [
                'attr' => [
                    'placeholder' => 'E-mail*',
                    'class' => 'form-control',
                    'id' => 'email_input',
                ],
                'label_attr' => [
                    'class' => 'sr-only',
                ],
            ])
            ->add('message', TextareaType::class, [
                'attr' => [
                    'placeholder' => 'Message',
                    'class' => 'form-control',
                    'id' => 'message_input',
                ],
                'label_attr' => [
                    'class' => 'sr-only',
                ],
            ])
            ->add('agree', CheckboxType::class, [
                'label' => 'Je souhaite recevoir....',
                'required' => false,
            ])
            ->add('autorisation', CheckboxType::class, [
                'label' => 'Pour répondre à ma demande d’information, j’autorise Firstcom à stocker mes données renseignées dans ce formulaire.',
                'required' => false,
            ])
            ->add('envoyer', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary',
                    'id' => 'form_button',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
